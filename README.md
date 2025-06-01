# summer-chores

This project demonstrates how to use JavaScript callbacks to execute a series of asynchronous chore functions one after another, simulating a person completing summer chores. Each chore has a chance for the person to become too tired and stop, showing how callback chains can be interrupted.

## Files

- **callbackVersion.js**: 
   Contains all the chore functions and the main function that chains them together using callbacks.

- **promiseVersion.js**:
   Contains all the chore functions and the main function that chains them together using promises.

- **asyncAwaitVersion.js**: 
   Contains all the chore functions and the main function that chains them together using promises upadted to use async await.

## How It Works

1. **Chore Functions**:  
   - `mowYard`
   - `weedEat`
   - `trimHedges`
   - `collectWood`
   - `waterGarden`  
   Each function takes a person's name and a callback, or promise depending on the version. Then they, using `setTimeout`, randomly determine if the person is too tired to continue.

2. **Chaining with Callbacks**:  
   The `doAllChores` function starts the chain by calling `mowYard`, which then calls the next chore in its callback or promise. If the person becomes too tired at any step the chain stops.

   **Chaining with Promises**:
   The `doAllChores` function starts by calling `mowYard`. If the promise is resolved, the next chore function is called. If the person becomes to tired the promise is rejected and the chain stops.  

3. **Completion Message**:  
   If all chores are completed the following message is logged:  
   `PERSON'S NAME finished all their chores!`

## Example

Run one of the scripts with Node.js:

```bash
node callbackVersion.js 
node promiseVersion.js
node asyncAwaitVersion.js
```

