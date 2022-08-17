/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function PieClassic(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="240px"
      height="366px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "PieClassic")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Background Card")}
      ></View>
      <View
        height="24px"
        position="absolute"
        top="16px"
        left="16px"
        right="72px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "16 sp \u2022 Body 1")}
      ></View>
      <View
        height="24px"
        position="absolute"
        top="40px"
        left="16px"
        right="16px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "14 sp \u2022 Body 2")}
      ></View>
      <View
        height="32px"
        position="absolute"
        bottom="16px"
        left="16px"
        right="16px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "\uD83D\uDD36 Items/Color info 4 pts.")}
      ></View>
      <View
        width="206px"
        height="206px"
        position="absolute"
        top="calc(50% - 103px - -16px)"
        left="calc(50% - 103px - -1px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Pie Blue")}
      ></View>
    </View>
  );
}
