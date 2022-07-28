import React, {ReactNode} from 'react';

interface IMainLayoutProps {
    children: ReactNode;
}

const MainLayout = (props:IMainLayoutProps) => {
    return (
        <div className={"grid-container"}>
            <header>
                <h1><span>TODO.</span> App</h1>
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                <i>Ipseidev</i>
            </footer>
        </div>
    );
};

export default MainLayout;