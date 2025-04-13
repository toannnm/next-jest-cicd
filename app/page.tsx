// Ensure the correct type for params
type Params = {
  params: {
    slug: string;
  };
};

// Update the function to use the correct type
export default function BlogPage({ params }: Params) {
  const { slug } = params;

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
    </div>
  );
}