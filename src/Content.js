import React from 'react'

const Content = () => {

    const handleNameChange = () => {
        const names = ['Jill', 'Jane', 'John'];
        const check = Math.floor(Math.random() * 3);
        return names[check];
    }

  return (
    <main>
        <p>
            Hello {handleNameChange()}!
        </p>
    </main>
  )
}

export default Content