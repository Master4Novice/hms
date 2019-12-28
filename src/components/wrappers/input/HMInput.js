import React from 'react';

import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

const HMInput = ({input: {name, onChange, value, ...restInput}, meta, ...rest}) => {
    const showError = ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) && meta.touched;
	return (
		<div>
			<Input {...rest} name={name} error={showError} inputProps={restInput} onChange={onChange} value={value} />
			{showError && <FormHelperText>{meta.error || meta.submitError}</FormHelperText>}
		</div>
	);
};

export default HMInput;