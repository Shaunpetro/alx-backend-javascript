export default function guardrail(matchFunction) {
    const queue = [];
        let res;
        try {
            res = matchFunction();
        } catch (error) {
            res = `Error: ${error.message}`;
        }
        queue.push(res);
        queue.push('Guardrail was processed');

        return queue;
}