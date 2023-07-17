import { useForm, isEmail, hasLength } from '@mantine/form';
import {
  Button,
  Group,
  TextInput,
  Box,
  Card,
  Title,
  Radio,
  Textarea,
  NumberInput,
  Flex,
} from '@mantine/core';
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

export const ContactForm = (): JSX.Element => {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      contactOption: 'Enquiry',
      message: '',
      adults: 1,
      children: 0,
    },

    validate: {
      name: hasLength({ min: 2, max: 18 }, 'Name must be 2-18 characters long'),
      email: isEmail('Invalid email'),
      message: hasLength(
        { min: 10 },
        'Message must be at least 10 characters long'
      ),
    },
  });

  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);

  const handleSubmit = async (values: typeof form.values) => {
    try {
      const response = await fetch('/api/serverless/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          startDate: dateRange[0]?.toISOString(),
          endDate: dateRange[1]?.toISOString(),
        }),
      });

      if (response.ok) {
        form.reset();
      } else {
        throw new Error('Email sending failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card>
      <Title order={2} align='center'>
        Contact us
      </Title>
      <Box
        component='form'
        maw={400}
        mx='auto'
        onSubmit={form.onSubmit(() => {
          handleSubmit(form.values);
        })}
      >
        <TextInput
          label='Name'
          placeholder='Your name'
          {...form.getInputProps('name')}
        />
        <TextInput
          label='Email'
          placeholder='Your email'
          mt='sm'
          {...form.getInputProps('email')}
        />
        <Textarea
          label='Message'
          placeholder='Your message'
          mt='xs'
          {...form.getInputProps('message')}
        />
        <Radio.Group
          mt='xs'
          mb='sm'
          size='sm'
          {...form.getInputProps('contactOption')} // Get input props for radio group
          name='contactOption'
          label='Intent'
          description='Choose the purpose for contacting us'
        >
          <Radio mt={2} value='Enquiry' label='Enquiry' />
          <Radio mt={2} value='Feedback' label='Feedback' />
          <Radio mt={2} value='Booking' label='Booking request' />
        </Radio.Group>
        {form.values.contactOption === 'Booking' && (
          <Flex
            gap='xs'
            justify='flex-start'
            align='flex-start'
            direction='row'
            wrap='wrap'
          >
            <DatePicker
              type='range'
              minDate={new Date()}
              value={dateRange}
              onChange={setDateRange}
            />
            <NumberInput
              label='Number of Children'
              description='Aged 16 or younger'
              withAsterisk
              min={0}
              {...form.getInputProps('children')}
            />
            <NumberInput
              label='Number of Adults'
              withAsterisk
              min={1}
              {...form.getInputProps('adults')}
            />
          </Flex>
        )}

        <Group position='right' mt='md'>
          <Button type='submit'>Send</Button>
        </Group>
      </Box>
    </Card>
  );
};
