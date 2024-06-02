import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button
} from '@mui/material';
import {
	deletePostContext,
	deleteIdContext
} from '../../../postContext';
import { useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const DeleteDialog = ({
  id
}) => {
  const { openDeleteDialog, setDeleteDialog } = useContext(deletePostContext);
  const navigate = useNavigate();
  const { blogId } = useContext(deleteIdContext)

  const handleDelete = () => {
    deletePost()
    setDeleteDialog(false);
  };

  const handleClose = () => {
    setDeleteDialog(false);
  };

  const deletePost = () => {
    fetch(`http://localhost:8000/blogs/post/${blogId}`, {
      credentials: 'include',
      method: 'DELETE',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Oops unable to delete post!');
        }
        return res.json();
      })
      .then((data) => {
        toast.success(data.message, { position: 'top-right' });
        //setPostNo(postNo - 1);
        navigate('/');
      })
      .catch((err) => {
        toast.error(err.message, { position: 'top-right' });
      });
  };

  return (
    <>
    <Dialog
      open={openDeleteDialog}
      onClose={handleClose}
    >
      <DialogTitle>
        {'Delete Post?'}
      </DialogTitle>
      <DialogContent>
        {'Are you sure you want to delete this post!'}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleDelete}>Yes</Button>
      </DialogActions>
    </Dialog>
    </>
  );
}

export default DeleteDialog;
