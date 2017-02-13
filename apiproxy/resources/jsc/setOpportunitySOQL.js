var ownerEmail = context.getVariable("request.queryparam.ownerEmail");
var another = context.proxyRequest.queryParams['ownerEmail'];
print(another);
if (another !== null) {
    context.setVariable("soQL", "SELECT id, AccountId, Account.Name, Owner.Name, Owner.Email FROM Opportunity WHERE Owner.Email='"+another+"'");
} 