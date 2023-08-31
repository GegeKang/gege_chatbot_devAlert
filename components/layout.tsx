interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex flex-col space-y-4">
      <header className="container top-0 z-40 bg-white">
        <div className="h-16 border-b border-b-slate-200 py-4">
          <nav className="ml-4 pl-6">
            <a href="#" className="white hover:bg-sky-500" style= {{ color: 'black',borderRight: '1px solid black',
            paddingRight: '1rem',paddingLeft: '1rem'}}>
              Home
            </a>
            <a href="https://www.givengain.com/cc/help-a-community-drill-borehole/" className="white hover:bg-sky-500" style= {{  color: 'black',borderRight: '1px solid black',
            paddingRight: '1rem',paddingLeft: '1rem'}}>
              Donation Link
            </a>
            <a href="https://da.or.ug/volunteers/" className="white hover:bg-sky-500" style= {{ color: 'black',borderRight: '1px solid black',
            paddingRight: '1rem',paddingLeft: '1rem'}}>
              Become Volunteer
            </a>
            <a href="https://github.com/GegeKang/gege_chatbot_devAlert" className="white hover:bg-sky-500" style= {{ color: 'black',borderRight: '1px solid black',
            paddingRight: '1rem',paddingLeft: '1rem'}}>
                 Website by Gezheng Kang👩‍💻
            </a>
            <a href="https://github.com/langchain-ai/langchain" className="white hover:bg-sky-500" style= {{  color: 'black',borderRight: '1px solid black',
            paddingRight: '1rem',paddingLeft: '1rem'}}>
              Powered by LangChain AI🦜
            </a>
            <a href="https://da.or.ug/" className="white hover:bg-sky-500" style= {{  color: 'black',borderRight: '1px solid black',
            paddingRight: '1rem',paddingLeft: '1rem'}}>
              Development AlertⒸ🤝
            </a>
          </nav>
        </div>
      </header>
      <div>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
