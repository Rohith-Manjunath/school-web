import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteNewsModal = ({Transition,handleClose,deleteLoading,handleDelete,id,open}) => {
  return (
      <>

      <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogContent>
                <DialogContentText style={{
                  color: "red",
                }} id="alert-dialog-slide-description">
                  Are you sure you want to delete this content ?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button disabled={deleteLoading} onClick={()=>handleDelete(id)} style={{
                  backgroundColor:"red",
                  color:"white"
                }} startIcon={<DeleteIcon />}>
              {deleteLoading ? "Deleting...":"Delete"}
            </Button>        </DialogActions>
            </Dialog>
      </>
  )
}

export default DeleteNewsModal