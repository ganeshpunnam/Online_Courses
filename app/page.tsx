import Header from './Header/page';
// import HtmlCompiler from './HtmlCompiler/page';

// import JavaScriptCompiler from './JavaScriptCompiler/page';
import StudentDashboard from './StudentDashboard/page';

const Page = () => {
  return (
    <div>
      <Header />
   {/* <HtmlCompiler/>
   <JavaScriptCompiler/> */}
   <StudentDashboard/>

    </div>
  );
}

export default Page;
