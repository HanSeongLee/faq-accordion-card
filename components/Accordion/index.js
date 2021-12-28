import React, {useState} from "react";
import styles from './style.module.scss';
import cn from 'classnames';

const Accordion = ({ items }) => {
    return (
        <ul className={styles.accordionContainer}>
            {items?.map((item) => (
                <AccordionItem {...item} />
            ))}
        </ul>
    );
};

const AccordionItem = ({ question, answer }) => {
    const [open, setOpen] = useState();

    return (
        <li className={cn(styles.accordionItem, {
            [styles.open]: open,
        })}
            key={question}
        >
            <p className={styles.questionText}
                 onClick={_ => setOpen(!open)}>
                {question}
            </p>
            <p className={styles.answerText}>
                {answer}
            </p>
        </li>
    )
}

export default Accordion
