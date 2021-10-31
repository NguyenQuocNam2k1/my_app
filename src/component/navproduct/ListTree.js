import React from "react";
import { Anchor } from "antd";
const { Link } = Anchor;

function ListTree() {
  return (
    <Anchor affix={false}>
      <Link href='#components-anchor-demo-basic' title='Accessories'>
        <Link href='#Kids accessories' title='Kids accessories' />
        <Link href='#Men accessories' title='Men accessories' />
        <Link href='#Women accessories' title='Women accessories' />
      </Link>
      <Link href='#components-anchor-demo-static' title='Kids clothing' />
      <Link href='#API' title='Lingerie'>
        <Link href='#Kids underwear' title='Kids underwear' />
        <Link href='#Men underwear' title='Men underwear' />
        <Link href='#Women lingerie' title='Women lingerie' />
      </Link>
      <Link href='#API' title='Men'>
        <Link href='#Men clothing' title='Men clothing' />
        <Link href='#Men swimwear' title='Men swimwear' />
        <Link href='#Women lingerie' title='Women lingerie' />
      </Link>
      <Link href='#Mix' title='Mix' />
      <Link href='#Sale' title='Sale' />
      <Link href='#API' title='Shoes'>
        <Link href='#Kids shoes' title='Kids shoes' />
        <Link href='#Men shoes' title='Men shoes' />
        <Link href='#Women shoes' title='Women shoes' />
      </Link>
      <Link href='#API' title='Women'>
        <Link href='#Women clothing' title='Women clothing' />
        <Link href='#Women swimwea' title='Women swimwear' />
      </Link>
    </Anchor>
  );
}

export default ListTree;
