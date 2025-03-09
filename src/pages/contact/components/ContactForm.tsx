import { useForm, isEmail, hasLength } from '@mantine/form';
import {
  Button,
  Group,
  TextInput,
  Box,
  Radio,
  Textarea,
  NumberInput,
  Select,
  Checkbox,
} from '@mantine/core';
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';
import { notifications } from '@mantine/notifications';
import { IconCalendar, IconCheck, IconX } from '@tabler/icons-react';

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
      termsOfBooking: false,
      termsOfPayment: false,
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

  const handleDateRangeChange = (dates: [Date | null, Date | null]) => {
    setDateRange(dates);
  };

  const handleSubmit = async (values: typeof form.values) => {
    // check date selected
    const startDate = dateRange[0] ? 
      new Date(dateRange[0].getTime() - dateRange[0].getTimezoneOffset() * 60000)
        .toISOString().split('T')[0] : null;
    const endDate = dateRange[1] ? 
      new Date(dateRange[1].getTime() - dateRange[1].getTimezoneOffset() * 60000)
        .toISOString().split('T')[0] : null;

    if (values.contactOption === 'Booking' && (!dateRange[0] || !dateRange[1])) {
      notifications.show({
        title: 'No date selected',
        message: 'Select a valid date range for your booking.',
        color: 'red',
        icon: <IconCalendar size={20} />,
        autoClose: 10000,
      });
      return;
    }
    // check minimum 2 nights for bed and breakfast
    if (
      values.contactOption === 'Booking' &&
      values.accommodationType === 'Bed & Breakfast' &&
      dateRange[0] &&
      dateRange[1] &&
      dateRange[1].getTime() - dateRange[0].getTime() < 172800000
    ) {
      notifications.show({
        title: 'Invalid date selected',
        message: 'A minimum stay of 2 nights for B&B required.',
        color: 'red',
        icon: <IconCalendar size={20} />,
        autoClose: 10000,
      });
      return;
    }
    // check terms of booking and payment
    if (
      values.contactOption === 'Booking' &&
      (values.termsOfBooking === false || values.termsOfPayment === false)
    ) {
      notifications.show({
        title: 'Terms and conditions',
        message: 'Please accept the terms and conditions.',
        color: 'red',
        icon: <IconX size={20} />,
        autoClose: 10000,
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
          startDate: startDate,
          endDate: endDate,
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
    <Box
      component='form'
      maw={400}
      mx='auto'
      onSubmit={form.onSubmit(() => {
        console.log(form);
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
        <Radio mt={4} value='Enquiry' label='Enquiry' />
        <Radio mt={6} value='Booking' label='Booking' />
      </Radio.Group>
      {form.values.contactOption === 'Booking' && (
        <div>
          <Select
            maw={270}
            label='Accommodation'
            placeholder='Select accommodation type'
            data={['Camping']} // Add B&B when wanted  'Bed & Breakfast'
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
            onChange={handleDateRangeChange}
          />
          <Checkbox
            mt='md'
            label='I aknowledge that this is a booking request and not a confirmed booking.'
            {...form.getInputProps('termsOfBooking', { type: 'checkbox' })}
          />
          <Checkbox
            mt='sm'
            label='I understand that payments are made upfront upon arrival at the reception.'
            {...form.getInputProps('termsOfPayment', { type: 'checkbox' })}
          />
        </div>
      )}

      <Group position='right' mt='md'>
        <Button loading={isLoading} type='submit'>
          Send
        </Button>
      </Group>
    </Box>
  );
};
