"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (value) => {
    if (typeof value !== 'string') {
        return false;
    }
    value = value.replace(/[^\d]+/g, '');
    if (value.length !== 11 || !!value.match(/(\d)\1{10}/)) {
        return false;
    }
    const values = value.split('').map(el => +el);
    const rest = (count) => (values.slice(0, count - 12).reduce((soma, el, index) => (soma + el * (count - index)), 0) * 10) % 11 % 10;
    return rest(10) === values[9] && rest(11) === values[10];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BmdmFsaWRhdGlvbi5oZWxwZXJzLmFkYXB0ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2hlbHBlcnMvY3BmdmFsaWRhdGlvbi5oZWxwZXJzLmFkYXB0ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0JBQWUsQ0FBQyxLQUFhLEVBQUUsRUFBRTtJQUM3QixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUMvQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRXJDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFDdEQsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QyxNQUFNLElBQUksR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDLEtBQUssR0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBRSxHQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFFdkksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDM0QsQ0FBQyxDQUFBIn0=