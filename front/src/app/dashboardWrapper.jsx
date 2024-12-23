import { Navbar } from "./(components)/Navbar"; //! parenthesis shows that this is not a seperate page
import { Sidebar } from "./(components)/Sidebar";

export const DashboardWrapper = ({ children }) => {
  //!   children props shows that whatever content you put inside a component will be rendered . in simple terms it  is like props but with some special feature
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900 ">
      <Sidebar />
      <main
        className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg md:pl-64`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

// ! high order component -  takes component as input and returns a new component
//  ? useful for reusing logic
