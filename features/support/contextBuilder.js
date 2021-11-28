let context = null;

function getContext() {
    return context;
}

function setContext(newContext) {
    context = newContext;
}

module.exports = {
   context,
   getContext,
   setContext
}