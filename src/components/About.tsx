"use client";

import Image from "next/image";
import { Paragraph } from "@/components/Paragraph";
import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/images/about_profile_01.jpg",
    "/images/about_profile_02.png",
    "/images/about_profile_03.jpg",
    "/images/about_profile_04.jpg",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="border-2 border-slate-500 rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          안녕하세요, 김건우입니다. 저는 Next.js, Node.js, TypeScript, Flutter
          등을 주력으로 다루는 4년 차 풀스택 개발자입니다. 개발은 단순히 코드를
          작성하는 것이 아니라, 사용자들에게 더 나은 경험을 제공하고, 문제를
          창의적으로 해결하며, 기술로 세상을 변화시키는 도전이라고 믿고
          있습니다.
        </Paragraph>
        <Paragraph className=" mt-4">
          4년이라는 시간 동안 다양한 프로젝트를 통해 웹과 모바일 애플리케이션
          개발의 전반적인 과정을 경험했습니다. 프론트엔드와 백엔드를 아우르는
          풀스택 역량을 바탕으로, 클라이언트와 서버 간의 원활한 통신, 성능
          최적화, 유지 보수 가능한 코드를 작성하는 데 중점을 두고 있습니다. 특히
          Next.js와 TypeScript를 활용한 프론트엔드 개발에서 사용자 친화적인
          인터페이스를 구현하고, Node.js를 통해 안정적이고 확장 가능한 서버
          환경을 구축하는 데 강점을 가지고 있습니다.
        </Paragraph>

        <Paragraph className=" mt-4">
          이 블로그는 제가 그동안 쌓아온 경험과 지식을 정리하고, 개발자
          커뮤니티와 소통하기 위해 시작되었습니다. IT 기술은 빠르게 변화하고,
          새로운 트렌드와 도구가 끊임없이 등장합니다. 저는 이 블로그를 통해 최신
          기술 동향을 공유하고, 실용적인 코드와 팁을 전달하며, 개발자 여러분들과
          함께 성장하는 공간으로 만들고자 합니다. 또한 프로젝트에서 직면했던
          문제와 이를 해결했던 과정을 상세히 다루어, 여러분에게 실질적인 도움이
          될 수 있는 자료를 제공하고 싶습니다.
        </Paragraph>
        <Paragraph className=" mt-4">
          기술에 대한 열정은 단순히 코드를 작성하는 데 그치지 않습니다. 저는 더
          나은 코드를 작성하기 위해 디자인 패턴, 성능 최적화, 클린 코드 원칙 등
          개발의 본질적인 부분에 관심을 기울이며, 이를 통해 사용자 경험을
          향상시키는 데 초점을 맞추고 있습니다. 또한 기술의 진정한 가치는
          사람들과 공유하고, 협업하며, 서로 배우는 과정에서 더욱 빛난다고
          믿습니다.
        </Paragraph>
        <Paragraph className=" mt-4">
          이 블로그는 IT와 기술에 관심이 있는 누구에게나 열려 있습니다. 초보
          개발자부터 숙련된 전문가까지, 다양한 독자들이 저의 글을 통해 영감을
          얻고 새로운 아이디어를 떠올릴 수 있기를 바랍니다. 개발자들이 서로
          소통하며 함께 성장할 수 있는 작은 플랫폼이 되었으면 합니다.
        </Paragraph>
        <Paragraph className=" mt-4">
          저와 함께 IT 기술과 개발의 무한한 가능성을 탐구해 보세요. 여러분의
          피드백과 아이디어도 언제나 환영합니다. 이 블로그에서 유익한 정보를
          얻으시길 바라며, 방문해 주셔서 감사합니다.
        </Paragraph>
      </div>
    </div>
  );
}
