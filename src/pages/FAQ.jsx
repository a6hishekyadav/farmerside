import { useState } from 'react';
import React from 'react';

const FAQ = () => {
    const [selected, setSelected] = useState(null)

    const toggle = i => {
        if (selected == i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return (
        <>
        <h1>FAQ</h1>
        <div className='wrapper'>
            <div className="accordian">

                {data.map((item, i) => (
                    <div className="item">
                        <div className="title" onClick={() => toggle(i)}>
                            <h2>{item.question}</h2>
                            <span>{selected == i ? '-' : '+' }</span>
                        </div>
                        <div className={selected == i ? 'content show' : 'content' }>{item.answer}</div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

const data = [
    {
        question: 'Question 1',
        answer:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.Assumenda aspernatur, eligendi ipsam ratione natus ea cumque voluptatibus mollitia laborum, ab itaque ipsa qui suscipit a.Vel, totam error.Voluptatem, eum?.',
    },
    {
        question: 'Question 2',
        answer:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.Assumenda aspernatur, eligendi ipsam ratione natus ea cumque voluptatibus mollitia laborum, ab itaque ipsa qui suscipit a.Vel, totam error.Voluptatem, eum?.',
    },
    {
        question: 'Question 3',
        answer:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.Assumenda aspernatur, eligendi ipsam ratione natus ea cumque voluptatibus mollitia laborum, ab itaque ipsa qui suscipit a.Vel, totam error.Voluptatem, eum?.',
    },
    {
        question: 'Question 4',
        answer:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.Assumenda aspernatur, eligendi ipsam ratione natus ea cumque voluptatibus mollitia laborum, ab itaque ipsa qui suscipit a.Vel, totam error.Voluptatem, eum?.',
    },
    {
        question: 'Question 5',
        answer:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.Assumenda aspernatur, eligendi ipsam ratione natus ea cumque voluptatibus mollitia laborum, ab itaque ipsa qui suscipit a.Vel, totam error.Voluptatem, eum?.',
    },
    
]

export default FAQ;