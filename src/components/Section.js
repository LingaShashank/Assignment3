import React, { useState } from 'react'

const Section = () => {
  /*To add the items I used a seperate variables to store and display in the web page 
  * The useState hook is used to create state variable.
  */
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  /* I used an arrow function which is assigned to a varible called addItem to add the item 
  entered in the input field which is given in page*/
  const addItem = () => {
    if (item.trim() !== '') {
      setList([...list, item]);
      setItem('');
    }
  };
  /* I used an arrow function which is assigned to a varible called deleteItem to delete the item 
  from the existing list in the page by onClick on the "X" symbol.*/
  const deleteItem = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };
  /* To display the list items we use map() function*/
  return (
    <div>
      <center>
        <div class = "sectionBlock">
          <h2>Items To Buy</h2><br></br>
          <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Add a new Item in the List"
        />
        <button onClick={addItem}>Add</button><br></br>
        <table>
    <thead>
        <th>Items</th>
        <th>"X"</th>
    </thead>
    <tbody>
        <tr>
            <td>
            {list.map((listItem, index) => (
              <>
              <td key={index}>{listItem}</td>
              <br></br> 
              </>
            ))} 
            </td>
            <td>
            {list.map((listItem, index) => (
              <>
              <td key={index}><button onClick={() => deleteItem(index)}>x</button></td>
              <br></br>
              </>
            ))}    
            </td>  
        </tr>
    </tbody>
</table>
      <br></br>
      <h4>I used tables to display the list of items which are entered in text field.</h4>
      <p class="ppp" style={{textAlign:'justify'}}>In detail: I created two arrow functions naming "addItem","deleteItem".
        The addItem function is responsible for adding an item into the table when we click on Add button.
        The deleteItem is responsible for delete the clicked "X" item from the List.
      </p>
        </div>
      </center>
    </div>
  )
}

export default Section