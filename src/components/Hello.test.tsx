import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from './Hello';

it('renderiza o texto correto quando nenhum nível de entusiasmo é dado', () =>{
    expect(() => {
        enzyme.shallow(<Hello nome='Jonatas Mattos' nivelDeEntusiasmo={0} />);
    }).toThrow();
});

it('renderiza o texto correto quando 1 nível de entusiasmo é dado', () =>{
    const hello = enzyme.shallow( <Hello nome='Jonatas Mattos' nivelDeEntusiasmo={1} /> );
    expect(hello.find(".saudacao").text()).toEqual('Eai Jonatas Mattos!')
});

it('renderiza o texto correto quando 5 nível de entusiasmo é dado', () =>{
    const hello = enzyme.shallow( <Hello nome='Jonatas Mattos' nivelDeEntusiasmo={5} /> );
    expect(hello.find(".saudacao").text()).toEqual('Eai Jonatas Mattos!!!!!')
});

it('lança quando o nível de entusiasmo é 0', () =>{
    expect(() => {
        enzyme.shallow(<Hello nome='Jonatas Mattos' nivelDeEntusiasmo={0} />);
    }).toThrow();
});

it('lança quando o nível de entusiasmo é negativo', () =>{
    expect(() => {
        enzyme.shallow(<Hello nome='Jonatas Mattos' nivelDeEntusiasmo={-1} />);
    }).toThrow();
});