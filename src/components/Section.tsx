import * as React from 'react';
import Container from "./Container";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Section: React.SFC<Props> = ({ className, children }) => {
  return (
    <section className={className}>
      <Container>{children}</Container>
    </section>
  )
};

export default Section;
