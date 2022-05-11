const args=process.argv.slice(2);

const Reade=require('./Reade');
const Create=require('./Create');
const Update=require('./Update');
const Delete=require('./Delete');

const operator=args[0];

switch (operator) {
    case 'create':
        const createArr=args[1];
        Create(createArr);
        break;
        case 'reade':
        const readeArr=args[1];
        Reade(readeArr);
        break;
        case 'update':
        const updateArr=args[1];
        const chengeData=args[2];
        Update(updateArr,chengeData);
        break;
        case 'delete':
        const deleteArr=args[1];
        Delete(deleteArr);
        break;

    default:console.log(`"op" ${operator} "is not operator reade or create or update or delete"`);
        
}
