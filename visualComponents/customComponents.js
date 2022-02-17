import React from "react";
import { TouchableWithoutFeedback, StyleSheet, Modal, View, FlatList } from "react-native";
import PropTypes from "prop-types";

export const CustomModal = (props) => {
	return (
		<Modal
			visible={props.visible}
			transparent={props.transparent || true}
			onRequestClose={props.dismiss}
			animationType={props.animationType || "fade"}
		>
			<TouchableWithoutFeedback onPress={props.dismiss}>
				<View style={[styles.modalOverlay, props.overlay]} />
			</TouchableWithoutFeedback>
			<View style={styles.modalContent}>{props.children}</View>
		</Modal>
	);
};

export const SwapModal = (props) => {
	return (
		<Modal
			visible={props.visible}
			transparent={props.transparent || true}
			onRequestClose={props.dismiss}
		>
			<TouchableWithoutFeedback onPress={props.dismiss}>
				<View style={[styles.modalOverlay, props.overlay]} />
			</TouchableWithoutFeedback>
			<View style={styles.modalContent}>{props.children}</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modalContent: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	modalOverlay: {
		position: "absolute",
		height: "100%",
		width: "100%",
		backgroundColor: "rgba(0,0,0,0.4)",
	},
});
