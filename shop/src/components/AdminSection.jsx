function AdminSection({ title, children }) {
  return (
    <div className="admin-section">
      <div className="admin-section-title">{title}</div>
      {children}
    </div>
  );
}

export default AdminSection;
