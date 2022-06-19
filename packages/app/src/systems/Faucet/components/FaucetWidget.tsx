import toast from "react-hot-toast";
import { FaFaucet } from "react-icons/fa";

import { useFaucet } from "../hooks";

import { FaucetApp } from "./FaucetApp";

import { Button, Card, Dialog, useDialog } from "~/systems/UI";

export function FaucetWidget() {
  const dialog = useDialog();
  const faucet = useFaucet();

  function handleClickFaucet() {
    return dialog.openButtonProps.onPress();
  }

  return (
    <div className="faucetWidget">
      <Button {...dialog.openButtonProps} onPress={handleClickFaucet} size="md">
        <FaFaucet />
        Faucet
      </Button>
      <Dialog {...dialog.dialogProps}>
        <Dialog.Content className="faucetWidget--dialog">
          <Card>
            <Card.Title>
              <FaFaucet className="text-primary-500" /> Faucet
            </Card.Title>
            <div>
              Click the button below to receive {faucet.faucetAmount} test ETH
              to your wallet.
            </div>
            <FaucetApp
              isButtonFull
              onSuccess={() => {
                toast.success("Test ETH successfully fauceted!");
                dialog.close();
              }}
            />
          </Card>
        </Dialog.Content>
      </Dialog>
    </div>
  );
}
