/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function LineChart3(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="240px"
      height="267px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "LineChart3")}
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
        width="56px"
        height="24px"
        position="absolute"
        top="16px"
        right="16px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Counter")}
      ></View>
      <View
        position="absolute"
        top="96px"
        bottom="0px"
        left="240px"
        right="-240px"
        transformOrigin="top left"
        transform="rotate(180deg)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, " \u2198 Downtrend \u2022 56dp")}
      ></View>
      <View
        width="40px"
        height="32px"
        position="absolute"
        top="calc(50% - 16px - 37.5px)"
        right="166px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Tooltip")}
      ></View>
    </View>
  );
}
