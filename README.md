# summer-chores

This project demonstrates how to use JavaScript callbacks to execute a series of asynchronous chore functions one after another, simulating a person completing summer chores. Each chore has a chance for the person to become too tired and stop, showing how callback chains can be interrupted.

## Files

- **callbackVersion.js**: Contains all the chore functions and the main function that chains them together using callbacks.

## How It Works

1. **Chore Functions**:  
   - `mowYard`
   - `weedEat`
   - `trimHedges`
   - `collectWood`
   - `waterGarden`  
   Each function takes a person's name and a callback. Then they, using `setTimeout`, randomly determine if the person is too tired to continue.

2. **Chaining with Callbacks**:  
   The `doAllChores` function starts the chain by calling `mowYard`, which then calls the next chore in its callback. If the person becomes too tired at any step the chain stops.

3. **Completion Message**:  
   If all chores are completed the following message is logged:  
   `PERSON'S NAME finished all their chores!`

## Example

Run the script with Node.js:

```bash
node callbackVersion.js
```
