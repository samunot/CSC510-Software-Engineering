traverseWithParent(ast, function(node) {
    if (node.type === 'FunctionDeclaration') {
        var builder = new FunctionBuilder();
        builder.functionName = functionName(node);
        builder.StartLine = node.loc.start.line;
        builders[builder.functionName] = builder;
        if (node.type === 'IfStatement') {
            builder.conditions += 2;
            traverseWithParent(node, function(child) {
                if (child && (child.type === 'IfStatement')) {
                    builder.conditions += 2;
                }
            });
        }
    }
});


traverseWithParent(ast, function(node) {
    if (node.type === 'FunctionDeclaration') {
        var builder = new FunctionBuilder();
        builder.functionName = functionName(node);
        builder.StartLine = node.loc.start.line;
        builders[builder.functionName] = builder;
        if (isDecision(node)) {
            Builder.conditions++;
            traverseWithParent(node.test, function(child) {
                if (child && (child.type === 'LogicalExpression')) {
                    Builder.conditions++;
                }
            });
        }
    }
});