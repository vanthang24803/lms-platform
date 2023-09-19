import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface SearchPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const userId = auth();

  if (!userId) {
    redirect("/");
  }

  return <div className="p-10 text-lg">This is Search Page</div>;
};

export default SearchPage;
