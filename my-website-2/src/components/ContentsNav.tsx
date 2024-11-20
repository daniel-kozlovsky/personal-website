import React, { ReactNode } from 'react';

function ContentsNav ({ contentsMap }: {contentsMap: Map<string,string>}) {
    
    let contents: ReactNode[] = [];
    contentsMap.forEach( (v, k) => {
         contents.push(
         <li key={k} onClick={() => scrollToElementbyID(k)}>{v}</li>
        );
    });

    return (
        <ul>
            {contents}
        </ul>
    );
}

function scrollToElementbyID (id: string)
{
    document.getElementById(id)?.scrollIntoView();
}

export default ContentsNav;