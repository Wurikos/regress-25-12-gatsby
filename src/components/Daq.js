import React from "react";
import { useOverrides } from "@quarkly/components";
import { Button } from "@quarkly/widgets";
const defaultProps = {
	"quarkly-title": "Buttons",
	"children": "Button"
};
const overrides = {};

const Daq = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Button {...rest}>
		{children}
	</Button>;
};

Object.assign(Daq, { ...Button,
	defaultProps,
	overrides
});
export default Daq;