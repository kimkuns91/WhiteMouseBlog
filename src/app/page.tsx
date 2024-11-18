import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">안녕하세요! 김건우입니다.</Heading>
      <Paragraph className="max-w-xl mt-4">
        코드로 세상을 조금 더 재미있게 만드는 풀스택 개발자입니다.{" "}
        <Highlight>Next.js, Node.js, TypeScript, Flutter</Highlight> 를
        사랑하며, 사람들에게 &ldquo;와, 이거 진짜 편리하다!&rdquo;라는 감탄을
        주는 걸 목표로 하고 있어요.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        <Highlight>4년 동안</Highlight> 4년 동안 웹과 모바일을 넘나들며 확장
        가능하고 성능 좋은 애플리케이션을 만들어왔고, 코드와 디자인 모두에
        진심을 담아 작업합니다. IT 세계를 탐험하는 이 여정에 함께하실래요?
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        최신 글
      </Heading>
      <TechStack />
    </Container>
  );
}
