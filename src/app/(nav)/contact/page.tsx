import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";
import { Paragraph } from "@/components/Paragraph";

export const metadata: Metadata = {
  title: "문의 | 김건우",
  description:
    "김건우는 4년 차 풀스택 개발자로, Next.js, Node.js, TypeScript, Flutter 등을 활용하며 IT 기술과 코드를 공유합니다.",
};

export default function ContactPage() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">연락하기</Heading>
      <Paragraph className="mb-10 max-w-xl">
        이메일을 통해 연락하시거나 아래 연락 양식을 작성해 주세요.
        <br /> 최대한 빠르게 답변드리겠습니다!
      </Paragraph>
      <Contact />
    </Container>
  );
}
