const DoublyLinkedList = require('./DoublyLinkedList.js');
const rendline  = require('readline')

const rl = rendline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const dll = new DoublyLinkedList()

function mainMenu() {
    console.log("\n********** Menu **********");
    console.log("1. Check if the list is empty");
    console.log("2. Push a value");
    console.log("3. Pop a value");
    console.log("4. Shift a value");
    console.log("5. Unshift a value");
    console.log("6. Get a value at an index");
    console.log("7. Set a value at an index");
    console.log("8. Insert a value at an index");
    console.log("9. Remove a value at an index");
    console.log("10. Display the list");
    console.log("0. Exit");
    rl.question("Choose an option: ", (option) => {
        handleUserOption(option)
    })
}

function handleUserOption(option) {
    switch(option) {
        case '1':
            console.log("Is the list empty? ", dll.isEmpty())
            mainMenu()
            break
        case '2':
            rl.question("Enter a value to push: ", (val) => {
                dll.push(parseInt(val));
                console.log("After push:")
                dll.display()
                mainMenu()
            })
            break
        case '3':
            dll.pop()
            console.log("Popped value: " )
            console.log("After pop:")
            dll.display()
            mainMenu()
            break;
        case '4':
            dll.shift()
            console.log("Shifted value: ")
            console.log("After shift:");
            dll.display();
            mainMenu();
            break;
        case '5':
            rl.question("Enter a value to unshift: ", (val) => {
                dll.unshift(parseInt(val));
                console.log("After unshift:");
                dll.display();
                mainMenu();
            });
            break;
        case '6':
            rl.question("Enter an index to get value: ", (index) => {
                dll.get(parseInt(index));
                mainMenu();
            });
            break;
        case '7':
            rl.question("Enter an index to set value: ", (index) => {
                rl.question("Enter a new value: ", (val) => {
                    dll.set(parseInt(index), parseInt(val));
                    console.log("After set:");
                    dll.display();
                    mainMenu();
                });
            });
            break;
        case '8':
            rl.question("Enter an index to insert value: ", (index) => {
                rl.question("Enter a new value: ", (val) => {
                    dll.insert(parseInt(index), parseInt(val));
                    console.log("After insert:");
                    dll.display();
                    mainMenu();
                });
            });
            break;
        case '9':
            rl.question("Enter an index to remove value: ", (index) => {
                const removedNode = dll.remove(parseInt(index));
                console.log("Removed value: ", removedNode ? removedNode.data : null);
                console.log("After remove:");
                dll.display();
                mainMenu();
            });
            break;
        case '10':
            dll.display();
            mainMenu();
            break;
        case '0':
            rl.close();
            console.log("Exiting...")
            break;
        default:
            console.log("Invalid option. Please try again.");
            mainMenu();
            break;
    }
}

mainMenu()