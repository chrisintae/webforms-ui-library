import "./globals.sass";
import { Container, Menu, MenuItem, Wrapper } from "@components/Layout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Wrapper>
          <Menu>
            <MenuItem link="/component/card" label="Card" />
          </Menu>
          <Container>{children}</Container>
        </Wrapper>
      </body>
    </html>
  );
}
