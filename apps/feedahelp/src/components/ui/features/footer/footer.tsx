export const Footer = () => {
  return (
    <div className="flex h-[10vh] w-full justify-center bg-purple-600 p-4 text-center text-white">
      &copy; {new Date().getFullYear()} FeedAHelp. All rights reserved.
    </div>
  );
};

export default Footer;
