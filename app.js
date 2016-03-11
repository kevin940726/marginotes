import React from 'react';
import { render } from 'react-dom';

import Marginotes from './react-marginotes';

const Container = ({ children }) => (
    <div style={{
        paddingLeft: 15,
        paddingRight: 15,
        margin: 'auto',
        width: 600
    }}>
        {children}
    </div>
);

let Link = ({ children, href="#" }) => (
    <a href={href}>{children}</a>
);
Link = Marginotes(Link);

let Span = ({ children }) => (
    <span style={{color: "blue"}}>{children}</span>
);
Span = Marginotes(Span);

render(
    <Container>
        <p>An oppressed release evaluates the rose. The physics multiplies a chase. The sentient <Link desc="The discrete void deeds the bankrupt opposite the toe radio.">elaborates the parody</Link> above the grown preface. The borderline poison equips an anxious stair.</p>
        <p>A radius dictates. The <Span desc="A side wrecker resists the shortened specimen.">backspace</Span> ties an unbalanced boat. A star pools the clash. The <Link href="https://github.com" desc="A shock journal passes a leader under his biggest fork. The craft jokes! Why can't a usual war smile?">documentary</Link> graduates opposite the clash! The federal converter intervenes beside a digital burden.</p>
    </Container>,
    document.getElementById('root')
);
