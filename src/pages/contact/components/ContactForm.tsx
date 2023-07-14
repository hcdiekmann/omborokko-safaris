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
  ScrollArea,
} from '@mantine/core';
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

export const ContactForm = (): JSX.Element => {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      contactOption: 'Message',
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
        body: JSON.stringify(values),
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
    <ScrollArea h={600}>
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
            <Radio mt={2} value='Message' label='Enquiry or Feedback' />
            <Radio mt={2} value='Booking' label='Booking request' />
          </Radio.Group>
          {form.values.contactOption === 'booking' && (
            <Group>
              <NumberInput
                label='No. of Adults'
                withAsterisk
                min={1}
                {...form.getInputProps('adults')}
              />
              <NumberInput
                label='No. of Children'
                description='Under the age of 16'
                withAsterisk
                min={0}
                {...form.getInputProps('children')}
              />
              <DatePicker
                type='range'
                value={dateRange}
                onChange={setDateRange}
              />
            </Group>
          )}

          <Group position='right' mt='md'>
            <Button type='submit'>Send</Button>
          </Group>
        </Box>
      </Card>
    </ScrollArea>
  );
};
