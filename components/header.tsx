import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs';
import HeaderLogo from './header-logo';
import Navigation from './navigation';
import { Loader2 } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-blue-500 to-blue-500 py-8 px-4 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex justify-between items-center mb-14">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="size-8 animate-spin text-slate-400" />
          </ClerkLoading>
        </div>
      </div>
    </header>
  );
};

export default Header;