import React from "react";
import { Anchor } from "antd";
const { Link } = Anchor;

function ListTree() {
  return (
    <Anchor affix={false}>
      <Link href='#components-anchor-demo-basic' title='Accessories'>
        <Link href='#Anchor-Props' title='Kids accessories' />
        <Link href='#Link-Props' title='Men accessories' />
        <Link href='#Link-Props' title='Women accessories' />
      </Link>
      <Link href='#components-anchor-demo-static' title='Kids clothing' />
      <Link href='#API' title='Lingerie'>
        <Link href='#Anchor-Props' title='Kids underwear' />
        <Link href='#Link-Props' title='Men underwear' />
        <Link href='#Link-Props' title='Women lingerie' />
      </Link>
      <Link href='#API' title='Men'>
        <Link href='#Anchor-Props' title='Men clothing' />
        <Link href='#Link-Props' title='Men swimwear' />
        <Link href='#Link-Props' title='Women lingerie' />
      </Link>
      <Link href='#Anchor-Props' title='Mix' />
      <Link href='#Anchor-Props' title='Sale' />
      <Link href='#API' title='Shoes'>
        <Link href='#Anchor-Props' title='Kids shoes' />
        <Link href='#Link-Props' title='Men shoes' />
        <Link href='#Link-Props' title='Women shoes' />
      </Link>
      <Link href='#API' title='Women'>
        <Link href='#Anchor-Props' title='Women clothing' />
        <Link href='#Link-Props' title='Women swimwear' />
      </Link>
    </Anchor>
  );
}

export default ListTree;
