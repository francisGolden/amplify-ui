import React from 'react';
import { translate } from '@aws-amplify/ui';

import { useAuthenticator } from '@aws-amplify/ui-react-core';
import { Button } from '../../../primitives/Button';
import { Flex } from '../../../primitives/Flex';

export const ConfirmSignInFooter = (): JSX.Element => {
  const { isPending, toSignIn } = useAuthenticator((context) => [
    context.isPending,
    context.toSignIn,
  ]);

  return (
    <Flex direction="column">
      <Button
        isDisabled={isPending}
        type="submit"
        variation="primary"
        fontWeight="normal"
        isLoading={isPending}
        loadingText={translate('Confirming')}
      >
        {translate('Confirm')}
      </Button>

      <Button
        onClick={toSignIn}
        type="button"
        variation="link"
        fontWeight="normal"
        size="small"
      >
        {translate('Back to Sign In')}
      </Button>
    </Flex>
  );
};
