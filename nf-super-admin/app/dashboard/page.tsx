"use client";

import { useState } from "react";
import { LogOut, X } from "lucide-react";
import { Role, ROLE_CONFIGS } from "@/lib/types";
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

// ─── Super Admin Views ─────────────────────────────────────────────────────
import SuperAdminOverview from "@/components/views/super-admin/Overview";
import UsersView from "@/components/views/super-admin/Users";
import ChallengesView from "@/components/views/super-admin/Challenges";
import ChallengePlansView from "@/components/views/super-admin/ChallengePlans";
import MT5AccountsView from "@/components/views/super-admin/MT5Accounts";
import PayoutsView from "@/components/views/super-admin/Payouts";
import RevenueView from "@/components/views/super-admin/Revenue";
import AffiliatesView from "@/components/views/super-admin/Affiliates";
import LeaderboardView from "@/components/views/super-admin/Leaderboard";
import CertificatesView from "@/components/views/super-admin/Certificates";
import RulesView from "@/components/views/super-admin/Rules";
import KYCView from "@/components/views/super-admin/KYC";
import TraderPerformance from "@/components/views/super-admin/TraderPerformance";
import AdvancedReporting from "@/components/views/super-admin/AdvancedReporting";
import GlobalCommand from "@/components/views/super-admin/GlobalCommand";
import TeamView from "@/components/views/super-admin/Team";
import StaffPermissions from "@/components/views/super-admin/StaffPermissions";
import SettingsView from "@/components/views/super-admin/Settings";
import ActivityLogsView from "@/components/views/super-admin/ActivityLogs";

// ─── Compliance Views ──────────────────────────────────────────────────────
import ComplianceOverview from "@/components/views/compliance/ComplianceOverview";
import MonitorView from "@/components/views/compliance/Monitor";
import CompliancePayoutsView from "@/components/views/compliance/CompliancePayouts";
import FlaggedView from "@/components/views/compliance/Flagged";
import ViolationsView from "@/components/views/compliance/Violations";
import ComplianceReports from "@/components/views/compliance/Reports";

// ─── Support Views ─────────────────────────────────────────────────────────
import TicketsView from "@/components/views/support/Tickets";
import TicketDetailView from "@/components/views/support/TicketDetail";
import SupportUsersView from "@/components/views/support/SupportUsers";
import FAQView from "@/components/views/support/FAQ";
import MessagesView from "@/components/views/support/Messages";

// ─── Marketing Views ───────────────────────────────────────────────────────
import MarketingOverview from "@/components/views/marketing/MarketingOverview";
import TrafficView from "@/components/views/marketing/Traffic";
import SourcesView from "@/components/views/marketing/Sources";
import ConversionsView from "@/components/views/marketing/Conversions";
import CampaignsView from "@/components/views/marketing/Campaigns";
import MarketingReports from "@/components/views/marketing/MarketingReports";

// ─── Developer Views ───────────────────────────────────────────────────────
import SystemView from "@/components/views/developer/System";
import LogsView from "@/components/views/developer/Logs";
import ErrorsView from "@/components/views/developer/Errors";
import DeployView from "@/components/views/developer/Deploy";
import DatabaseView from "@/components/views/developer/Database";

// ─── Shared Views ──────────────────────────────────────────────────────────
import NotificationsView from "@/components/views/shared/Notifications";
import AccountSettings from "@/components/views/shared/AccountSettings";

// ─── Sign-out Confirmation Modal ───────────────────────────────────────────
function SignOutModal({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onCancel} />
      <div className="glass-modal rounded-2xl p-6 w-full max-w-sm relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#ff4444]/15 flex items-center justify-center">
            <LogOut size={18} className="text-[#ff6b6b]" />
          </div>
          <button onClick={onCancel} className="text-[#a8c0b8]/40 hover:text-white transition-all">
            <X size={16} />
          </button>
        </div>
        <h3 className="text-[15px] font-bold font-display text-white mb-1">Sign Out?</h3>
        <p className="text-[13px] text-[#a8c0b8]/60 leading-relaxed mb-5">
          You will be signed out of the Noble Funded admin platform. Any unsaved changes will be lost.
        </p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-2.5 rounded-xl text-[13px] font-medium text-[#a8c0b8] bg-white/[0.05] border border-white/[0.08] hover:text-white transition-all"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-2.5 rounded-xl text-[13px] font-semibold text-white bg-[#ff4444]/80 hover:bg-[#ff4444] border border-[#ff4444]/30 transition-all"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const [role, setRole] = useState<Role>("Super Admin");
  const [activeTab, setActiveTab] = useState<string>(ROLE_CONFIGS["Super Admin"].defaultTab);
  const [activeTicketId, setActiveTicketId] = useState<string>("TKT-5021");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [signOutModalOpen, setSignOutModalOpen] = useState(false);

  const handleRoleChange = (newRole: Role) => {
    setRole(newRole);
    setActiveTab(ROLE_CONFIGS[newRole].defaultTab);
    setMobileMenuOpen(false);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  const handleSignOut = () => {
    setSignOutModalOpen(false);
    // In production: call auth signout API, clear session, redirect to login
    // For this demo, reset to default state
    setRole("Super Admin");
    setActiveTab(ROLE_CONFIGS["Super Admin"].defaultTab);
  };

  const renderView = () => {
    // ── Shared (available to any role) ──────────────────────────────────
    if (activeTab === "notifications") return <NotificationsView role={role} />;
    if (activeTab === "account-settings") return <AccountSettings role={role} onSignOut={() => setSignOutModalOpen(true)} />;

    // ── Super Admin ──────────────────────────────────────────────────────
    if (role === "Super Admin") {
      if (activeTab === "overview") return <SuperAdminOverview onTabChange={handleTabChange} />;
      if (activeTab === "users") return <UsersView />;
      if (activeTab === "challenges") return <ChallengesView />;
      if (activeTab === "challenge-plans") return <ChallengePlansView />;
      if (activeTab === "mt5-accounts") return <MT5AccountsView />;
      if (activeTab === "payouts") return <PayoutsView />;
      if (activeTab === "revenue") return <RevenueView />;
      if (activeTab === "affiliates") return <AffiliatesView />;
      if (activeTab === "leaderboard") return <LeaderboardView />;
      if (activeTab === "certificates") return <CertificatesView />;
      if (activeTab === "rules") return <RulesView />;
      if (activeTab === "kyc") return <KYCView />;
      if (activeTab === "trader-performance") return <TraderPerformance />;
      if (activeTab === "advanced-reporting") return <AdvancedReporting />;
      if (activeTab === "global-command") return <GlobalCommand />;
      if (activeTab === "team") return <TeamView />;
      if (activeTab === "staff-permissions") return <StaffPermissions />;
      if (activeTab === "settings") return <SettingsView />;
      if (activeTab === "activity-logs") return <ActivityLogsView />;
    }

    // ── Compliance ───────────────────────────────────────────────────────
    if (role === "Compliance") {
      if (activeTab === "overview") return <ComplianceOverview onTabChange={handleTabChange} />;
      if (activeTab === "monitor") return <MonitorView />;
      if (activeTab === "payouts") return <CompliancePayoutsView />;
      if (activeTab === "flagged") return <FlaggedView />;
      if (activeTab === "violations") return <ViolationsView />;
      if (activeTab === "reports") return <ComplianceReports />;
    }

    // ── Support ──────────────────────────────────────────────────────────
    if (role === "Support") {
      if (activeTab === "tickets") return (
        <TicketsView
          onViewTicket={(id: string) => {
            setActiveTicketId(id);
            handleTabChange("ticket-detail");
          }}
        />
      );
      if (activeTab === "ticket-detail") return (
        <TicketDetailView
          ticketId={activeTicketId}
          onBack={() => handleTabChange("tickets")}
        />
      );
      if (activeTab === "users") return <SupportUsersView />;
      if (activeTab === "faq") return <FAQView />;
      if (activeTab === "messages") return <MessagesView />;
    }

    // ── Marketing ────────────────────────────────────────────────────────
    if (role === "Marketing") {
      if (activeTab === "overview") return <MarketingOverview onTabChange={handleTabChange} />;
      if (activeTab === "traffic") return <TrafficView />;
      if (activeTab === "sources") return <SourcesView />;
      if (activeTab === "conversions") return <ConversionsView />;
      if (activeTab === "campaigns") return <CampaignsView />;
      if (activeTab === "affiliates") return <AffiliatesView />;
      if (activeTab === "reports") return <MarketingReports />;
    }

    // ── Developer ────────────────────────────────────────────────────────
    if (role === "Developer") {
      if (activeTab === "system") return <SystemView />;
      if (activeTab === "logs") return <LogsView />;
      if (activeTab === "errors") return <ErrorsView />;
      if (activeTab === "deploy") return <DeployView />;
      if (activeTab === "database") return <DatabaseView />;
    }

    // Fallback
    return (
      <div className="page-fade flex items-center justify-center h-64">
        <div className="glass-card rounded-2xl p-8 text-center">
          <p className="text-[#00ffcc] text-[15px] font-display font-semibold">Section not found</p>
          <p className="text-[#a8c0b8]/50 text-[12px] mt-2">Tab: <code className="font-mono">{activeTab}</code></p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--surface)]">
      {/* Sidebar */}
      <Sidebar
        role={role}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onSignOut={() => setSignOutModalOpen(true)}
        isMobileOpen={mobileMenuOpen}
        onMobileClose={() => setMobileMenuOpen(false)}
      />

      {/* Main content */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Header
          role={role}
          onRoleChange={handleRoleChange}
          onTabChange={handleTabChange}
          onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
          onSignOut={() => setSignOutModalOpen(true)}
        />
        <main className="flex-1 overflow-y-auto px-4 lg:px-6 py-4 lg:py-5">
          {renderView()}
        </main>
      </div>

      {/* Sign Out Confirmation */}
      {signOutModalOpen && (
        <SignOutModal
          onConfirm={handleSignOut}
          onCancel={() => setSignOutModalOpen(false)}
        />
      )}
    </div>
  );
}
