import { Login, Logout } from "../../actions/auth";

test('should generate login action object', () => {

    const result = Login("123");
    expect(result).toEqual({
        type: 'LOGIN',
        uid: '123'
    });
});

test('should generate logout action object', () => {

    const result = Logout();
    expect(result).toEqual({
        type: 'LOGOUT'
    });     
});