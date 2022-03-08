import { cloneElement, ReactElement } from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router";


interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    matchExactHref?: boolean;
}

export const ActiveLink = ({ matchExactHref = false, children, ...rest }: ActiveLinkProps) => {
    const { asPath } = useRouter();

    const isActive = matchExactHref 
        ? asPath === rest.href 
        : ( asPath.startsWith(String(rest.href)));

    return (
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? 'pink.400' : 'gray.50',
            })}
        </Link>
    )
}