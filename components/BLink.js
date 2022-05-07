import Link from 'next/link';

const BLink = ({href, as=href, children, ...props}) => (
    <Link
        href={href}
        as={`${process.env.PREFIX_URL}${as}`}
        {...props}
    >
        {children}
    </Link>
);

export default BLink;
