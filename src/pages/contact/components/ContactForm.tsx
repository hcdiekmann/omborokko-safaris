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
  Select,
} from '@mantine/core';
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons-react';

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
    if (
      values.contactOption === 'Booking' &&
      (!dateRange[0] || !dateRange[1])
    ) {
      notifications.show({
        title: 'Invalid Date',
        message: 'Select a valid date range',
        color: 'red',
      });
      return;
    }
    try {
      setIsLoading(true);
      const response = await fetch('/api/serverless/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          startDate: dateRange[0]
            ? dateRange[0].toISOString().split('T')[0] // Convert to ISO string and remove time
            : null,
          endDate: dateRange[1]
            ? dateRange[1].toISOString().split('T')[0]
            : null,
        }),
      });

      if (response.ok) {
        form.reset();
        setDateRange([null, null]);
        notifications.show({
          title: 'Email sent',
          message: 'We will get back to you as soon as possible',
          color: 'green',
          icon: <IconCheck />,
        });
      } else {
        notifications.show({
          title: 'Sending failed',
          message: 'Something went wrong, please try again later',
          color: 'red',
          icon: <IconX />,
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
    <Card shadow='md' radius='md'>
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
          <div>
            <Select
              maw={270}
              label='Accommodation'
              placeholder='Select accommodation type'
              data={['Camping', 'Bed & Breakfast']}
              {...form.getInputProps('accommodationType')}
            />
            <NumberInput
              maw={270}
              label='Number of Adults'
              min={1}
              {...form.getInputProps('adults')}
            />
            {form.values.accommodationType === 'Camping' && (
              <NumberInput
                maw={270}
                label='Number of Children'
                description='Aged 16 or younger'
                min={0}
                {...form.getInputProps('children')}
              />
            )}
            <DatePicker
              mt={5}
              type='range'
              minDate={new Date()}
              value={dateRange}
              onChange={setDateRange}
            />
          </div>
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
