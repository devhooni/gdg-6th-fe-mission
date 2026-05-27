function AdminInputGroup({ label, children }) {
  return (
    <div className="admin-input-group">
      <span className="admin-label">{label}</span>
      {children}
    </div>
  );
}

export default AdminInputGroup;
