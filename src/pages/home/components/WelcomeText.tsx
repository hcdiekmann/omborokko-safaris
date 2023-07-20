import { Card, Text, Title } from '@mantine/core';

export const WelcomeText = (): JSX.Element => {
  return (
    <>
      <Title size={70} order={1} align='center' style={{ color: 'whitesmoke' }}>
        Welcome to Omborokko Safaris
      </Title>
      <Text size={18} weight={350} mt={10} mb={10} color='white' align='center'>
        A captivating farm retreat nestled amidst the natural splendor of
        Namibia. Sprawling over a vast 6000-hectare plain, our cattle farm is a
        thriving sanctuary for Namibia's diverse wildlife. Whether you choose
        the raw allure of camping or the comfortable charm of our B&B, we assure
        you an unforgettable encounter with Namibia's extraordinary landscape
        and wildlife.
      </Text>
      {/* <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.3407379474684!2d16.720677214551458!3d-20.898606674552536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1bf4d0a1bbde997f%3A0xfc41348745a0467e!2sOmborokko%20Safaris!5e0!3m2!1sde!2sna!4v1660646268646!5m2!1sde!2sna'
          width='50%'
          height='500'
          loading='lazy'
        ></iframe> We are conveniently situated just 2 hours north of
        Windhoek, a gateway to the enchanting wilderness of our beautiful
        country.*/}
    </>
  );
};
