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
  Select,
} from '@mantine/core';
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';
import { notifications } from '@mantine/notifications';

export const ContactForm = (): JSX.Element => {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      contactOption: 'Enquiry',
      message: '',
      accommodationType: 'Camping',
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
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values: typeof form.values) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/serverless/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          startDate: dateRange[0]
            ? dateRange[0].toISOString().split('T')[0]
            : null,
          endDate: dateRange[1]
            ? dateRange[1].toISOString().split('T')[0]
            : null,
        }),
      });

      if (response.ok) {
        form.reset();
        notifications.show({
          title: 'Email sent',
          message: 'We will get back to you as soon as possible',
          color: 'green',
        });
      } else {
        notifications.show({
          title: 'Email sending failed',
          message: 'Something went wrong, please try again later',
          color: 'red',
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      // Set loading back to false when the request ends,
      // whether it was successful or not
      setIsLoading(false);
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
            <Select
              label='Accommodation'
              placeholder='Select accommodation type'
              withAsterisk
              data={['Camping', 'Bed & Breakfast']}
              {...form.getInputProps('accommodationType')}
            />
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
          <Button loading={isLoading} type='submit'>
            Send
          </Button>
        </Group>
      </Box>
    </Card>
  );
};
