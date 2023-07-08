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
      contactOption: 'enquiry',
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
          onSubmit={form.onSubmit(() => {})}
        >
          <TextInput
            label='Name'
            placeholder='Your name'
            withAsterisk
            {...form.getInputProps('name')}
          />
          <TextInput
            label='Email'
            placeholder='Your email'
            withAsterisk
            mt='sm'
            {...form.getInputProps('email')}
          />
          <Textarea
            label='Message'
            placeholder='Your message'
            withAsterisk
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
            withAsterisk
          >
            <Radio mt={2} value='enquiry' label='Enquiry or Feedback' />
            <Radio mt={2} value='booking' label='Booking request' />
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
            <Button type='submit'>Submit</Button>
          </Group>
        </Box>
      </Card>
    </ScrollArea>
  );
};
