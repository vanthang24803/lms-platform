const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  return (
    <>
      <span className="text-xl text-slate-600">{params.courseId}</span>
    </>
  );
};


export default CourseIdPage;