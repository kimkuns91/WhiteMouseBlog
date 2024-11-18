interface Props {
  params: {
    id: string;
  };
}

export default async function BlogPost({ params }: Props) {
  return (
    <div>
      <h1>블로그 포스트 #{params.id}</h1>
      {/* 여기에 블로그 컨텐츠를 추가하세요 */}
    </div>
  );
}
